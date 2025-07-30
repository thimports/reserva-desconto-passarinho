import { Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Sobre a Reserva */}
          <div className="space-y-4">
            <h3 className="text-reserva-black font-bold text-lg">Sobre a Reserva</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">1P=5P</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Cultura</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Quem Faz</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Mapa de Categorias</a></li>
            </ul>
          </div>

          {/* Vem Pra Reserva */}
          <div className="space-y-4">
            <h3 className="text-reserva-black font-bold text-lg">Vem Pra Reserva</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Seja um Franqueado</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Minha Conta */}
          <div className="space-y-4">
            <h3 className="text-reserva-black font-bold text-lg">Minha Conta</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Favoritos</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Meus Pedidos</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Minha Carteira</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Meu Cartão Presente</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h3 className="text-reserva-black font-bold text-lg">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">Troca e Devolução</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h3 className="text-reserva-black font-bold text-lg">Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-reserva-red" />
                <span className="text-reserva-black font-medium">WhatsApp</span>
              </div>
              <p className="text-sm text-reserva-gray">
                Segunda à Sexta: 09h às 18h<br />
                Sábados: 08h às 16h
              </p>
              
              <div className="flex items-center gap-2 mt-4">
                <Mail className="w-4 h-4 text-reserva-red" />
                <span className="text-reserva-black font-medium">Fale com a gente</span>
              </div>
              <p className="text-sm text-reserva-gray">sac@usereserva.com</p>
              
              <a href="#" className="text-reserva-red text-sm hover:underline flex items-center gap-1">
                🔄 Solicite sua troca aqui
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-gray-200">
          <a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-reserva-gray hover:text-reserva-red transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-reserva-gray text-sm">
            © 2024 Reserva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};