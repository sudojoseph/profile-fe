import './ComputerScreen.css';

const ComputerScreen = ({img}) => {
  return (
    <article 
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="11" 
        initPosition={ 'x: 160, y: 0' }>
          <div className="monitor">
              <img src={img} alt="project-image" className='project-image'/>
          </div>
    </article>
  );
};

export default ComputerScreen;