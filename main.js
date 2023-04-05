const container = document.querySelector('.container');
      const popup=document.querySelector('.popup');
      const close_btn=popup.querySelector('button');
      
      let category=['india','london','russia','arctic','europe','arabia','switzerland','oceans','finland','thailand','dessert','mexico',
                      'brazil', 'usa', 'canada','indonesia','japan','italy','malaysia'];
  
      const orient=['vtall','htall']
  
      function get_category() {
        return category[Math.floor(Math.random() * category.length())]; 
      }
      
  
      function get_image_html(cat, orient) {
          return `
            <div class="img-cont ${orient}">
                <img src="https://source.unsplash.com/random/?${cat}" alt="">
                <div class="overlay">
                    <button class="view">View</button>
                </div>
            </div>
          `;
      }
      let all_img='';
      category.forEach((cat) => {
          const orientation = orient[Math.floor(Math.random() * 2)];
          const img_html=get_image_html(cat, orientation);
          all_img+=img_html;
      })
      container.innerHTML=all_img;
      const view_btn=document.querySelectorAll('.view');
      view_btn.forEach((btn) => {
        btn.addEventListener('click', show_popup);
      })


      function show_popup(e) {
        popup.classList.remove('close');
        const src=e.target.parentElement.parentElement.querySelector('img').src;
        popup.querySelector('img').src=src;
      }
      close_btn.addEventListener('click', () => {
        popup.classList.add('close');
      })