import LetterButton from './LetterButton';

//prettier-ignore
const qwertyLayout = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'z', 'x', 'c', 'v', 'b', 'n', 'm']

const LetterTray = () => {
  return (
    <>
      <div
        className='grid letter-tray sm:gap-4 gap-1 w-full max-w-screen-md'
        style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
        {qwertyLayout.map((letter) => (
          <div
            className='aspect-square w-full h-full'
            key={letter}>
            <LetterButton
              onClick={() => console.log(letter)}
              letter={letter}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LetterTray;
