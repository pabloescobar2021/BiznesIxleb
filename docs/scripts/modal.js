function openModal(element) {
  console.log(' from dataset:', element.dataset.description);
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const available = document.getElementById('available');
  const description = document.getElementById('description');
  const storageShelfLife = document.getElementById('storageShelfLife');
  const storageConditions = document.getElementById('storageConditions');

  const prot = document.getElementById('prot');
  const fat = document.getElementById('fat');
  const ugli = document.getElementById('ugli');
  const kcal = document.getElementById('kcal');

  const data = element.dataset;

  console.log(data);

  modal.classList.remove('hidden');
  modalTitle.textContent = data.name;
  modalImage.src = data.image;
  available.textContent = data.availability;
  description.textContent = data.description;

  let storageData = {};
  try{
    storageData = JSON.parse(data.storage || '{}');
  } catch (e){
    storageData = {};
  }

  if (storageData.shelf_life_months){
    storageShelfLife.textContent = `Срок годности: ${storageData.shelf_life_months} месяцев`;
  } else {storageShelfLife.textContent = '';}
  if (storageData.conditions){
    storageConditions.textContent = `Условия хранения: ${storageData.conditions}`;
  } else{storageConditions.textContent = ''}


  let storageDataKcal = {};
  try{
    storageDataKcal = JSON.parse(data.nutritional || '{}');
  } catch (e){storageDataKcal = {};}
  if (storageDataKcal.proteins_g || storageDataKcal.fats_g || storageDataKcal.carbohydrates_g || storageDataKcal.energy_kcal ){
    prot.textContent = storageDataKcal.proteins_g;
    fat.textContent = storageDataKcal.fats_g;
    ugli.textContent = storageDataKcal.carbohydrates_g;
    kcal.textContent = storageDataKcal.energy_kcal;
  }
}

function closeModal() {
  document.getElementById('myModal').classList.add('hidden');
}

window.addEventListener('click', function (e) {
  const modal = document.getElementById('myModal');
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
});
