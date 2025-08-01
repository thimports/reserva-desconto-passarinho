import { Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle, Mail } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Institucional */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Institucional</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Sobre a Netshoes</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Programa de Afiliados</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Soluções Corporativas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Regulamentos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Relatórios</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Programa de Integridade</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Black Friday Magalu</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Black Friday Netshoes</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Lojas Físicas</a></li>
            </ul>
          </div>

          {/* Especiais Netshoes */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Especiais Netshoes</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Suplementos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Corrida</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Bicicletas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Futebol</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Vôlei</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Basquete</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Motorsport</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Saúde Bem-Estar</a></li>
            </ul>
          </div>

          {/* Ajuda */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Ajuda</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Trocas e devoluções</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Entregas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Minha Conta</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Meus Pedidos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Pagamentos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Cancelamentos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">N.Card</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Segurança & Privacidade</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Como Comprar</a></li>
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Acessibilidade</a></li>
            </ul>
          </div>

          {/* Netshoes Empresas */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Netshoes Empresas</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-netshoes-gray hover:text-netshoes-purple transition-colors">Marketplace Netshoes</a></li>
            </ul>
          </div>

          {/* Central de Relacionamento */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Central de Relacionamento</h3>
            <div className="space-y-3">
              <button className="bg-purple-100 text-netshoes-purple px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition-colors">
                TIRE SUAS DÚVIDAS
              </button>
              
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a href="#" className="text-netshoes-purple hover:text-purple-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-netshoes-purple hover:text-purple-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-netshoes-purple hover:text-purple-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-netshoes-purple hover:text-purple-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Central de vendas e App */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-netshoes-black font-bold text-base sm:text-lg">Central de vendas</h3>
            <div className="space-y-2">
              <p className="text-sm text-netshoes-gray">(11) 3028-5355 e (11) 3070-6999</p>
              
              <div className="flex items-center gap-2 mt-4">
                <span className="text-netshoes-black font-medium text-sm">App Netshoes</span>
              </div>
              <p className="text-xs text-netshoes-gray">Conheça as vantagens</p>
            </div>
          </div>
        </div>

        {/* Mapas do Site */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-netshoes-black font-bold text-base sm:text-lg mb-4">Mapas do Site</h3>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-netshoes-gray hover:text-netshoes-purple transition-colors">Marcas</a>
            <a href="#" className="text-sm text-netshoes-gray hover:text-netshoes-purple transition-colors">Tipos de Produtos</a>
            <a href="#" className="text-sm text-netshoes-gray hover:text-netshoes-purple transition-colors">Departamentos</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-netshoes-gray text-xs sm:text-sm">© 2025 Netshoes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};