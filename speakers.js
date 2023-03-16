const speaker = document.querySelector('.speakers');

const data = [
  {
    Id: 1,
    image: './Images/Speaker 2 resize.jpg',
    userName: 'Catherine Muraga',
    occupation: 'Managing Director, Microsoft Africa Development Center',
    description: 'Catherine is an impressive developer from Kenya who has devoted her time and skills to develop the AI world not just in Kenya but the whole continent',
  }, {
    Id: 2,
    image: './Images/Speaker 3 resize.jpg',
    userName: 'Peter Ndegwa',
    occupation: 'Chief Executive Officer at Safaricom PLC',
    description: 'Peter is the CEO of the leading telecommunication company in Kenya. Technology has been one of the core resources that has made the company thrive',
  }, {
    Id: 3,
    image: './Images/Speaker 4 resize.jpg',
    userName: 'Agnes Gathaiya',
    occupation: 'CEO of google Kenya and East Africa',
    description: 'Agnes has been a huge help in the world of AI as she has been part and parcel of the worlds most popular browser.',
  }, {
    Id: 4,
    image: './Images/Speaker 5 resize.jpg',
    userName: 'Zach Kirkhorn',
    occupation: 'CFO of Tesla',
    description: 'Zach is one of the geniuses in the AI world. He is also the financial manager in the Tesla company which is owned by Elon Musk.',
  }, {
    Id: 5,
    image: './Images/Speaker 1 resize.jpg',
    userName: 'Bill Gates',
    occupation: 'Co-founder of Microsoft',
    description: 'Bill is one of the geniuses in the AI world. He also owns multiple of businesses and has always been interested in the world of technology.',
  }, {
    Id: 6,
    image: './Images/Speaker 6 resize.jpg',
    userName: 'Elon Musk',
    occupation: 'Owner and Co-founder of Tesla',
    description: 'Elon is one of the geniuses in the AI world. He also owns multiple of businesses including Twitter where he acquired ownership recently.',
  },
];

function visitors(guests) {
  guests.forEach((guest) => {
    const sheet = document.createElement('div');
    sheet.classList.add('layout');
    sheet.innerHTML = `
        <div class="layout1">
            <img src="${guest.image}" alt="">
        </div>
        <div class="layout2">
        <h2>
            ${guest.userName}
         </h2>
         <hr>
        <p class="title">
            ${guest.occupation}
        </p>
        <p class="text">
            ${guest.description}
        </p>
        </div>
        `;
    speaker.appendChild(sheet);
  });
}

visitors(data);