import style from './MainPage.module.css'
import Header from 'components/Header/Header';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
//import Filters from '../../components/PopUp/Filters/Filters';
const MainPage = () => {
    return (
        <>
        <Header/>
        <section className={style.MainSection}>
        <FilterComponent/>
        <p className={style.Text}>
            Before starting your project, it is essential<span> to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
        </p>
        </section>
        </>
    )
}

export default MainPage;