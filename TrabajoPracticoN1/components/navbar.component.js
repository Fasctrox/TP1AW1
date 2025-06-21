const url = "http://127.0.0.1:5500/TrabajoPracticoN1/pages/"

const navElements = [
    {title:'Home', link:`${url}home/home.html`},
    {title:'Clases', link:`${url}clases/clases.html`},
    {title:'Productos', link:`${url}productos/productos.html`},
    {title:'Ropa', link:`${url}ropa/ropa.html`},
]

export const navbarComponent = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="../../index.html">
                    <img src="../../assets/logo.webp" width="80" height="80" alt="Logo"> FitStore
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ms-auto">
                        ${
                            navElements.map(e =>{
                                return `
                                    <li class="nav-item">
                                        <a class="nav-link active" href="${e.link}">${e.title}</a>
                                    </li>
                                `
                            }).join('')
                        }
                        <li class="nav-item"><a class="btn btn-danger ms-2" href="../../pages/auth/login/login.html" id="logoutBtn""><i class="bi bi-box-arrow-left"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
`


/* Export e import

Para importar primero hay que exportar
*/