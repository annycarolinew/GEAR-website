// ==========================================
// COMPONENTE DE CABEÇALHO (<header-padrao>)
// ==========================================
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full text-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-16 h-16 flex items-center justify-between">
          
          <div class="flex items-center gap-8">
            <!-- Links Principais (Esquerda) -->
            <nav class="flex items-center gap-12 text-sm font-semibold text-gray-200">
              <a href="#" class="hover:font-black nav-link text-white transition-all">Home</a>
              <a href="#" class="hover:font-black nav-link hover:text-white transition-all">Mídia</a>
              <a href="#" class="hover:font-black nav-link hover:text-white transition-all">Sobre Nós</a>
            </nav>
          </div>

          <!-- LADO DIREITO: Cursos e Eventos (Ignorados no Mobile com 'hidden md:flex') -->
          <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-200 border-l border-gray-400/40 pl-6">
            <a href="#" class="hover:font-black nav-link hover:text-white transition-all">Cursos</a>
            <a href="#" class="hover:font-black nav-link hover:text-white transition-all">Eventos</a>
          </nav>

        </div>
      </header>
    `;
  }
}

// Registra a nova tag no navegador
customElements.define('header-padrao', Header);

class TituloSecao extends HTMLElement {
  connectedCallback() {
    // Pega o texto e o caminho da imagem passados por atributo no HTML
    const texto = this.getAttribute('texto') || 'Título da Seção';

    this.innerHTML = `
      <div class="flex items-center gap-3 py-2">
        <img 
          src="img/flechas.png" 
          class="w-8 h-8 object-contain shrink-0" 
        />
        
        <!-- Texto em seminegrito / negrito -->
        <h2 class="text-xxl md:text-2xl font-bold text-gray-800 tracking-tight">
          ${texto}
        </h2>
      </div>
    `;
  }
}

// Registra a nova tag no navegador
customElements.define('titulo-secao', TituloSecao);