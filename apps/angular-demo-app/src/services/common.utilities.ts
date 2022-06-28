export const convertImgToBase64 = (url: string): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const img = new Image;
    img.crossOrigin = 'Anonymous'; // 图片跨域
    img.onload = () => {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/base64');
      const base64 = dataURL.split(',')[1];
      base64ToBlob({b64data: base64, contentType: 'image/png'}).then((image) => {
        resolve(image);
      });
    };
    img.src = url;
  });
}

export const base64ToBlob = ({b64data = '', contentType = '', sliceSize = 512} = {}): Promise<Blob> => {
  return new Promise((resolve) => {
    // 使用 atob() 方法将数据解码
    const byteCharacters = atob(b64data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = [];
      for (let i = 0; i < slice.length; i++) {
        byteNumbers.push(slice.charCodeAt(i));
      }
      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。
      byteArrays.push(new Uint8Array(byteNumbers));
    }
    let result = new Blob(byteArrays, {
      type: contentType
    });
    result = Object.assign(result, {
      // 这里一定要处理一下 URL.createObjectURL
      preview: URL.createObjectURL(result),
      name: `XXX.png`
    });
    resolve(result);
  });
}
