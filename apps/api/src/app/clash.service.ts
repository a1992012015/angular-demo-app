import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import * as yaml from 'js-yaml';
import * as fs from 'fs';

@Injectable()
export class ClashService {
  constructor(private http: HttpService) {}

  private readonly rule = ['SRC-IP-CIDR,192.168.2.86/32,🕹️ Switch'];
  private readonly proxiesGroup = { name: '🕹️ Switch', type: 'select', proxies: [] };

  getProxies(): Observable<object> {
    return this.http.get('http://127.0.0.1:9090/proxies');
  }

  getConfig(): Observable<object> {
    return this.http.get('http://127.0.0.1:9090/configs');
  }

  getYamlConfig(): object {
    try {
      return yaml.load(fs.readFileSync('/Users/liujie/.config/clash/EXFLUX.yaml', 'utf8'));
    } catch (e) {
      return {};
    }
  }

  setYamlConfig(data: object): object {
    try {
      const config = yaml.load(fs.readFileSync('/Users/liujie/.config/clash/EXFLUX.yaml', 'utf8'));
      const proxies = config.proxies.filter((proxies) => proxies.name.includes('游戏'));
      const filterProxies = proxies.map((proxies) => proxies.name);
      const group = Object.assign({}, this.proxiesGroup, { proxies: filterProxies });
      config['proxy-groups'].splice(1, 0, group);
      config['rules'].unshift(...this.rule);
      fs.writeFileSync('/Users/liujie/.config/clash/EXFLUX1.yaml', yaml.dump(config));
      return {};
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}
