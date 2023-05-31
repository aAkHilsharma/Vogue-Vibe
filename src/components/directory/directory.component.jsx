import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item-component';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
