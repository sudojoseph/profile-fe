import DownloadResume from "../components/DownloadResume/DownloadResume";

const DownloadResumePage = ({api}) => {
  return (
    <div className='page-container'>
        <DownloadResume api={api} />
    </div>
  );
};

export default DownloadResumePage;