window.onload = function () {
    document.addEventListener('click', documentActions)

    function documentActions(e) {
        const targetElement = e.target

        if (targetElement.classList.contains('add-button')) {
            const passengers = document.querySelector('.passengers')
            const passengersValue = document.querySelectorAll('.passenger-container')
            const newPassenger = `<div id="${passengersValue.length + 1}" class="passenger-container">
                        <div class="passenger-section">
                            <div class="passenger-number">Пассажир № ${passengersValue.length + 1}</div>
                            <div class="passenger-block">
                                <button class="close-button" type="button"><img id="${passengersValue.length + 1}" class="close-button" src="../images/close.svg" alt="Закрыть"></button>
                            </div>
                        </div>
                        <div class="passenger-info">
                            <div class="input-block">
                                <div class="input-title">Фамилия<span class="red-text">*</span></div>
                                <input x-moz-errormessage="Это поле обязательное" id="surname" required type="text" class="input-form">
                            </div>
                            <div class="input-block">
                                <div class="input-title">Имя<span class="red-text">*</span></div>
                                <input required type="text" id="name" class="input-form">
                            </div>
                            <div class="input-block">
                                <div class="input-title">Отчество<span class="red-text">*</span></div>
                                <input required type="text" id="middlename" class="input-form">
                            </div>
                        </div>
                    </div>`
            passengers.insertAdjacentHTML('beforeend', newPassenger)
        }
        if (targetElement.classList.contains('close-button')) {
            console.log(targetElement.id)
            const passengers = document.querySelector('.passengers')
            const deletePas = document.getElementById(targetElement.id)
            console.log(deletePas)
            deletePas.remove()
        }
    }
}
