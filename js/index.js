
window.onload = function () {
    document.addEventListener('click', documentActions)

    function documentActions(e) {
        const targetElement = e.target

        if (targetElement.classList.contains('add-button')) {
            console.log("bit")
            const passengers = document.querySelector('.passengers')
            const passengersValue = document.querySelectorAll('.passenger-container')
            const newPassenger = `<br>
<div class="passenger-container">
                        <div class="passenger-section">
                            <div class="passenger-number">Пассажир № ${passengersValue.length+1}</div>
                            <div class="passenger-add">
                                <button type="button" class="add-button button-blue">Добавить пассажира</button>
                            </div>
                        </div>
                        <div class="passenger-info">
                            <div class="input-block">
                                <div class="input-title">Фамилия<span class="red-text">*</span></div>
                                <input x-moz-errormessage="Это поле обязательное" required type="text" class="input-form">
                            </div>
                            <div class="input-block">
                                <div class="input-title">Имя<span class="red-text">*</span></div>
                                <input required type="text" class="input-form">
                            </div>
                            <div class="input-block">
                                <div class="input-title">Отчество<span class="red-text">*</span></div>
                                <input required type="text" class="input-form">
                            </div>
                        </div>
                    </div>`
            passengers.insertAdjacentHTML('beforeend', newPassenger)
        }
    }
}