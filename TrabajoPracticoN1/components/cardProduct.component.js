export const cardProductComponent = (data) => {
    return `
        <div class="col">
            <div class="card h-100 shadow">
                <img src="${data.img}" class="card-img-top img-fixed" alt="${data.title}">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.desc}</p>
                </div>

                <div class="card-footer d-flex justify-content-between align-items-center mt-3">
                    <small class="text-muted">${data.time}</small>
                    <a href="#" class="btn btn-primary">Inscribirse</a>
                </div>
            </div>
        </div>
    `
}