import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1b2aba87256e4508b19d0bd1e71a0ac3',
  appName: 'reserva-desconto-passarinho',
  webDir: 'dist',
  server: {
    url: "https://1b2aba87-256e-4508-b19d-0bd1e71a0ac3.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;