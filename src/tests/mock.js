(function () {
  googleMapMockData = {
    mapTypes: []
  };
  window.google = window.google || {
    maps: {
      geometry: {
        spherical: {
          computeDistanceBetween: (from, to, radius) => {},
          computeOffset: (from, distance, heading, radius) => {},
          computeArea: () => 1000
        },
        poly: {
          containsLocation: () => true
        }
      },
      LatLngBounds: function () {
        this.extend = () => {};
        this.getCenter = () => {
          return {
            lat: () => {
              return 1;
            },
            lng: () => {
              return 0;
            }
          };
        };
      },
      Circle: function () {
        this.properties = {};
        this.addListener = () => {};
        this.setMap = (map) => {};
        this.set = (key, value) => {
          this.properties[key] = value;
        };
        this.get = (key) => {
          return this.properties[key];
        };
        this.setOptions = () => {};
        this.setPath = () => {};
        this.setPaths = () => {};
        this.getPaths = () => {
          return {
            getArray: () => {
              return [];
            }
          };
        };
        this.getPath = () => {
          return [];
        };
        this.getBounds = () => {
          return new google.maps.LatLngBounds();
        };
        this.getCenter = () => {
          return new google.maps.LatLng(0, 0);
        };
        this.setCenter = (center) => {};
        this.setRadius = (radius) => {};
        return this;
      },
      Polygon: function () {
        this.array = [];
        this.properties = {};
        this.addListener = () => {};
        this.setMap = (map) => {};
        this.set = (key, value) => {
          this.properties[key] = value;
        };
        this.get = (key) => {
          return this.properties[key];
        };
        this.setOptions = () => {};
        this.setPath = (path) => {
          this.array = path;
        };
        this.getPath = () => {
          return new google.maps.MVCArray(this.array);
        };
        this.setPaths = (paths) => {
          this.array = paths;
        };
        this.getPaths = () => {
          return new google.maps.MVCArray(new google.maps.MVCArray(this.array));
        };
        this.getArray = () => {
          return new google.maps.MVCArray([new google.maps.LatLng(0, 0)]);
        };
        return this;
      },
      Polyline: function () {
        this.properties = {};
        this.addListener = () => {};
        this.setMap = (map) => {};
        this.set = (key, value) => {
          this.properties[key] = value;
        };
        this.get = (key) => {
          return this.properties[key];
        };
        this.setOptions = () => {};
        this.setPath = (path) => {
          this.array = path;
        };
        this.getPath = () => {
          return new google.maps.MVCArray(this.array);
        };
        return this;
      },
      StrokePosition: {
        INSIDE: 1
      },
      MVCArray: function (array) {
        this.array = array || [];
        this.forEach = (callback) => {
          this.array.forEach((item, index) => {
            callback(item, index);
          });
        };
        this.addListener = function () {
          return {
            remove: () => {}
          };
        };
        this.getArray = () => {
          return Array.isArray(this.array) ? this.array : [];
        };
        this.getLength = () => {
          return 4;
        };
        this.getAt = (i) => {
          return this.array[i];
        };
        this.getPaths = () => {
          return new window.google.maps.MVCArray(this.array);
        };
        this.push = (elem) => {
          this.array.push(elem);
          return this.array.length;
        };
        this.removeAt = (index) => {
          return new window.google.maps.LatLng(0, 0);
        };
        this.clear = (index) => {
          this.array = [];
        };
        this.pop = () => {
          return new window.google.maps.LatLng(0, 0);
        };
      },
      Map: function (containerElement) {
        this.containerElement = containerElement;
        this.options = {};
        this.controls = [];
        this.controls[1] = {
          push: function () {},
          clear: function () {},
          getLength: function () {
            return 0;
          },
          forEach: function () {}
        };
        this.controls[6] = {
          push: function () {},
          clear: function () {},
          getLength: function () {
            return 0;
          }
        };
        this.getBounds = function () {
          return {
            getNorthEast: function () {
              return new window.google.maps.LatLng(41.3112672, -99.1856709);
            },
            getSouthWest: function () {
              return new window.google.maps.LatLng(41.3112672, -99.1856709);
            }
          };
        };
        this.panTo = (lat, lng) => {};
        this.getProjection = function () {
          return {
            fromLatLngToPoint: function (latLng) {
              return new window.google.maps.Point(latLng.lat(), latLng.lng());
            }
          };
        };
        this.fitBounds = (bounds, padding) => {};
        this.addListener = () => {
          return {
            remove: function () {}
          };
        };
        this.setMapTypeId = (mapTypeId) => {};
        this.set = (key, value) => {};
        this.setOptions = (options) => {
          this.options = options;
        };
        this.overlayMapTypes = new google.maps.MVCArray(googleMapMockData.mapTypes);
        this.getZoom = () => {
          return 13;
        };
        this.setCenter = (latLng) => {};
        this.setZoom = (zoom) => {};
        this.getCenter = () => {
          return {
            toJSON: () => {
              return '';
            }
          };
        };
        this.getDiv = () => {
          return this.containerElement;
        };
      },
      OverlayView: function () {
        this.setMap = (map) => {
          if (map === null && typeof this.onRemove === 'function') {
            this.onRemove();
          }
        };
        this.set = () => {};
        this.get = () => {
          return new window.google.maps.LatLng(0, 0);
        };
        this.getPanes = () => {
          return {
            floatPane: document.createElement('div'),
            overlayMouseTarget: document.createElement('div')
          };
        };
        this.getProjection = () => {
          return {
            fromLatLngToDivPixel: (latLng) => {
              return new window.google.maps.Point(latLng.lat(), latLng.lng());
            },
            fromDivPixelToLatLng: (point) => {
              return new window.google.maps.LatLng(0, 0);
            }
          };
        };
        if (typeof this.onAdd === 'function') {
          this.onAdd();
        }
      },
      Geocoder: function () {
        this.geocode = function () {};
      },
      Marker: function () {
        this.addListener = () => {};
        this.setPosition = () => {};
        this.setMap = () => {};
        this.setOptions = () => {};
        this.setIcon = () => {};
        this.getPosition = () => new google.maps.LatLng(0, 0);
        this.setVisible = () => {};
        this.getZIndex = () => {};
        this.setZIndex = () => {};
      },
      InfoWindow: function () {
        this.setContent = () => {};
        this.close = () => {};
      },
      LatLng: function (lat, lng) {
        this.latLng = { lat, lng };
        this.lat = () => this.latLng.lat;
        this.lng = () => this.latLng.lng;
        this.equals = () => true;
        this.toJSON = () => {
          return this.latLng;
        };
      },
      Point: function (lat, lng) {
        this.x = 10;
        this.y = 10;
        this.equals = () => true;
      },
      Size: function () {
        this.width = 256;
        this.height = 256;
      },
      Animation: {
        DROP: ''
      },
      MapTypeId: { ROADMAP: true },
      places: {
        Autocomplete: function () {
          this.addListener = () => {};
        },
        AutocompleteService: function () {},
        PlacesService: function (obj) {
          return {
            PlacesServiceStatus: {
              OK: true
            },
            textSearch: function (query) {
              return [];
            },
            nearbySearch: function (query) {
              return [];
            }
          };
        }
      },
      GeocoderStatus: {
        OK: 'OK'
      },
      ControlPosition: {
        BOTTOM_LEFT: 1,
        LEFT_BOTTOM: 6
      },
      event: {
        addDomListener: () => {
          return {
            remove: function () {}
          };
        },
        addListener: () => {
          return {
            remove: function () {}
          };
        },
        removeListener: () => {},
        clearListeners: () => {},
        clearInstanceListeners: () => {}
      },
      Data: function () {
        this.datas = [new window.google.maps.Data.Feature()];
        this.addGeoJson = function (addGeoJson, options) {};
        this.forEach = function (callback) {
          Array.prototype.forEach.apply(this.datas, [callback]);
        };
        this.setMap = function (map) {};
      },
      SymbolPath: {
        CIRCLE: 0
      }
    }
  };

  window.google.maps.Data.Feature = function () {
    this.getGeometry = function () {
      return new window.google.maps.Data.Geometry();
    };
  };

  window.google.maps.Data.Geometry = function () {
    this.forEachLatLng = function (callback) {
      callback(new window.google.maps.LatLng(0, 0));
    };
  };

  window.google.maps.Data.Point = function (latLng) {
    if (latLng instanceof window.google.maps.LatLng) {
      this.point = latLng;
    } else {
      this.point = new window.google.maps.LatLng(latLng.lat, latLng.lng);
    }
    this.get = function () {
      return this.point;
    };
  };

  window.gapi = window.gapi || {
    load: () => {}
  };

  window.goog = window.goog || {
    dom: {
      safe: {
        setScriptSrc: (scriptElement, trustedResourceUrl) => {
          scriptElement.src = trustedResourceUrl.getTypedStringValue();
        },
        setLocationHref: (location, url) => {},
        setImageSrc: (img, googSafeUrl) => {
          img.src = googSafeUrl.getTypedStringValue();
        },
        createImageFromBlob: (blob) => {
          const img = document.createElement('img');
          return img;
        }
      },
      removeChildren: (node) => {
        node.innerHTML = '';
      }
    },
    string: {
      Const: {
        from: (str) => {
          return {
            getTypedStringValue: () => str
          };
        }
      }
    },
    html: {
      SafeHtml: {
        fromBlob: (blob) => {
          return {
            getTypedStringValue: () => {
              return {
                getTypedStringValue: () => 'blobUrl'
              };
            }
          };
        },
        fromConstant: (url) => {
          return {
            getTypedStringValue: () => url.getTypedStringValue()
          };
        }
      },
      TrustedResourceUrl: {
        fromConstant: (url) => {
          return {
            getTypedStringValue: () => url.getTypedStringValue()
          };
        }
      }
    }
  };

  window.userfeedback = {
    api: {
      startFeedback: function () {}
    }
  };
})();
