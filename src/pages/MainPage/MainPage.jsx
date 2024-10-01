import style from './MainPage.module.css'
import Header from 'components/Header/Header';
import filter from '../../images/filter.png';
const MainPage = () => {
    return (
        <>
        <Header/>
        <button>
            <img src={filter} alt='filter'/>
            Filters
        </button>
        <p className={style.Text}>
            Before starting your project, it is essential<span> to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
        </p>
        </>
    )
}

export default MainPage;