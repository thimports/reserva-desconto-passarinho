import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AppDownloadBanner = () => {
  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com', '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-primary via-primary to-netshoes-purple-dark text-white py-6 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Smartphone className="h-6 w-6" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg">Baixe o app</h3>
              <p className="text-sm opacity-90">
                A Reserva todinha na palma da sua mão, baixe agora na loja do seu smartphone.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={handleGooglePlayClick}
              className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
            >
              <Download className="h-4 w-4" />
              Google Play
            </Button>
            <Button
              onClick={handleAppStoreClick}
              className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
            >
              <Download className="h-4 w-4" />
              App Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};