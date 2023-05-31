import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item-component';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
