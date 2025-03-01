class GSP_Set_Thumbnail {
  constructor() {
    this.thumbnails = document.querySelectorAll(".-thumbnail");


    this.events();

    this.set_thumbnail_height();
  }

  events() {

    window.addEventListener("resize", () => {
        
      });
  }

  set_thumbnail_height() {
   const  card_view_blog = document.querySelector(".-card-view-blog");
    for (let i = 0; i < this.thumbnails.length; i++) {
      this.thumbnails[i].style.height =
      Math.round(  (card_view_blog.offsetHeight / 16) * 9 ) + "px";

    }
  }
}


document.addEventListener('DOMContentLoaded', () => {

    new GSP_Set_Thumbnail();
});

