ymaps.ready(init);

const cities = {
  mgn: {
    city: ['53.407163', '58.980291'],
    coordinates: ['53.436617', '58.955372'],
  },
  askarovo: {
    city: ['53.336339', '58.511497'],
    coordinates: ['53.330219', '58.514398']
  },
  uchaly: {
    city: ['54.319181', '59.378640'],
    coordinates: ['54.316329', '59.377185']
  },
  beloreck: {
    city: ['53.967621', '58.410023'],
    coordinates: ['53.968257', '58.410229']
  }
}

let myMap = null;
function init() {
  myMap = new ymaps.Map("contacts__map", {
    center: cities.mgn.coordinates,
    zoom: 15,
    controls: ['geolocationControl']
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small"
    }
  });
  myMap.controls.add(zoomControl);

  const placemark = new ymaps.Placemark(cities.mgn.coordinates, {}, {
    balloonCloseButton: false,
    hideIconOnBalloonOpen: false
  })

  myMap.geoObjects.add(placemark);
}


const select = document.querySelector('.contacts__select')
const selectTitle = select.querySelector('.contacts__select-title')
const selectList = select.querySelector('.contacts__select-list')
const selectItems = selectList.querySelectorAll('.contacts__select-item')


//Клик вне select
document.addEventListener('click', (event) => {
  if (!select.contains(event.target))
    select.classList.remove('open')
})

//Клин на заголовок select
selectTitle.addEventListener('click', () => {
  select.classList.toggle('open')
})

//Выбор пункта в select
selectItems.forEach( selectItem => {
  selectItem.addEventListener('click', () => {
    const cityId = selectItem.dataset.city
    selectTitle.innerHTML = selectItem.innerHTML
    select.classList.remove('open')
    myMap.setCenter(cities[cityId].coordinates, 15)

    const placemark = new ymaps.Placemark(cities[cityId].coordinates, {}, {
      balloonCloseButton: false,
      hideIconOnBalloonOpen: false
    })
    myMap.geoObjects.removeAll();
    myMap.geoObjects.add(placemark);
  })
})

Maska.create('.partners__phone')

//Отправка сообщения
const partnersButton = document.querySelector('.partners__button')
const partnersPhone = document.querySelector('.partners__phone')
partnersButton.addEventListener('click', () => {
  if (partnersPhone.value)
    console.log('ffff', partnersPhone.value)
  else
    console.log('error')
})

// alert(window.innerWidth)