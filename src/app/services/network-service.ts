// APLICANDO SINGLETON
// ESTA CLASE SE ENCARGARÁ DE MANEJAR LA COFIGURACION DE RED Y SERÁ ACCESIBLE DESDE CUALQUIER LUGAR DE LA APLICACIÓN

export class NetworkService {
    private static instance: NetworkService;
    private wifiConfig: { ssid: string; password: string } | null = null;
  
    // Constructor privado para evitar instancias externas
    private constructor() {}
  
    // Método para obtener la única instancia de la clase
    static getInstance(): NetworkService {
      if (!NetworkService.instance) {
        NetworkService.instance = new NetworkService();
      }
      return NetworkService.instance;
    }
  
    // Métodos para configurar y obtener los datos de red
    setWifiConfig(ssid: string, password: string): void {
      this.wifiConfig = { ssid, password };
      console.log('Configuración Wi-Fi guardada:', this.wifiConfig);
    }
  
    getWifiConfig(): { ssid: string; password: string } | null {
      return this.wifiConfig;
    }
  }
  