import './directory.styles.scss';
import CategoryItem from '../category-item/category-item-component';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
