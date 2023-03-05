import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ gallery }) => {
  return gallery.map(el => {
    return (
      <li key={el.id} className={css.gallery__item} >
        <img 
          className={css.gallery__image}
          src={el.webformatURL}
          alt={el.tags}
        />
      </li>
   
    );
  });
};

