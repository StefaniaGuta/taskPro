import React from 'react';
import ModalEditColumn from 'components/PopUp/ModalEditColumn/ModalEditColumn';
import ModalEditCard from 'components/PopUp/EditCard/EditCard';
import ModalAddColumn from 'components/PopUp/ModalAddColumn/ModalAddColumn';
import ModalAddCard from 'components/PopUp/AddCard/AddCard';
import Header from 'components/Header/Header';
import FilterComponent from 'components/FilterComponent/FilterComponent';
import { useState } from 'react';
import styles from './ProjectOffice.module.css';
import firstImage from '../../images/SidePencil.png';
import secondImage from '../../images/SideBin.png';
import leftBarImage from '../../images/Bluebar.png';
import priorityIcon from '../../images/Ellipseblue.png';
import icon1 from '../../images/arrow.png';
import icon2 from '../../images/SidePencil.png';
import icon3 from '../../images/SideBin.png';
import leftBarImage1 from '../../images/Pinkbar.png';
import priorityIcon1 from '../../images/Ellipsepink.png';
import leftBarImage2 from '../../images/Graybar.png';
import priorityIcon2 from '../../images/Ellipsegray.png';
import leftBarImage3 from '../../images/Greenbar.png';
import priorityIcon3 from '../../images/Ellipsegreen.png';
import bell from '../../images/bell.png';
import { useSelector } from 'react-redux';

const ProjectOffice = () => {
  const [isEditColumnModalOpen, setIsEditColumnModalOpen] = useState(false);
  const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const theme = useSelector(state => state.auth.user.theme);
  return (
    <>
      <Header/>
      {isEditCardModalOpen && <ModalEditCard onClose={() => setIsEditCardModalOpen(false)} />}
      {isEditColumnModalOpen && <ModalEditColumn onClose={() => setIsEditColumnModalOpen(false)} />}
      
    
      <section className={`${styles.ProjectOfficeSection} ${styles[theme]}`}>
        <div className={styles['title-filters-container']}>
          <h1 className={styles['project-office-title']}>Project office</h1>
            <FilterComponent/>
        </div>
        <div className={styles['project-office-container']} style={{ flex: 1 }}>

          
          <div className={styles['column']}>
            <div className={styles.card1}>
              To Do
              <div className={styles['card-icons']}>
                <img
                  src={firstImage}
                  alt="First"
                  className={styles['icon-image']}
                  onClick={() => setIsEditColumnModalOpen(true)}
                  />
                <img
                  src={secondImage}
                  alt="Second"
                  className={styles['icon-image']}
                  />
              </div>
            </div>
            
            <div className={styles['card-column']}>
              <div className={styles['task-card']}>
                <img
                  src={leftBarImage}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>The Watch Spot Design</h2>
                <p className={styles['card-description']}>
                  Create a visually stunning and eye-catching <br /> watch dial
                  design that embodies our brand's..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>Low</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} onClick={() => setIsEditCardModalOpen(true)} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>
              
              <div className={styles['task-card']}>
                <img
                  src={leftBarImage1}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>Research and Analysis</h2>
                <p className={styles['card-description']}>
                  Conduct in-depth research and analysis on the <br /> project's
                  topic, gather relevant data, and identify..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon1}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>Medium</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>

              <div className={styles['task-card']}>
                <img
                  src={leftBarImage2}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>Concept Development</h2>
                <p className={styles['card-description']}>
                  Brainstorm and develop creative concepts and <br /> ideas that
                  align with the project's objectives,..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon2}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>Without</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>
              <button className={styles['add-card']} onClick={() => setIsAddCardModalOpen(true)}>
                <span className={styles['add-button']}>+</span>
                Add another card
              </button>
              </div>
        </div>

        <div className={styles['column']}>
          <div className={styles.card1}>
            In Progress
            <div className={styles['card-icons']}>
              <img
                src={firstImage}
                alt="First"
                className={styles['icon-image']}
              />
              <img
                src={secondImage}
                alt="Second"
                className={styles['icon-image']}
              />
            </div>
          </div>
            <div className={styles['card-column']}>
              <div className={styles['task-card']}>
                <img
                  src={leftBarImage}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>
                  Design and Prototyping SoYummy
                </h2>
                <p className={styles['card-description']}>
                  Create visually appealing and functional design <br />{' '}
                  prototypes based on the approved concepts,..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>Low</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={bell} alt="Bell" className={styles['icon']} />
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>

              <div className={styles['task-card']}>
                <img
                  src={leftBarImage3}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>Content Creation</h2>
                <p className={styles['card-description']}>
                  Generate engaging and persuasive content for <br /> various
                  project deliverables, such as..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon3}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>High</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={bell} alt="Bell" className={styles['icon']} />
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>

              <div className={styles['task-card']}>
                <img
                  src={leftBarImage2}
                  alt="Colored bar"
                  className={styles['left-bar']}
                />
                <h2 className={styles['card-title']}>Quiz Creation</h2>
                <p className={styles['card-description']}>
                  Create engaging and interactive quizzes using <br /> Kahoot's
                  intuitive quiz builder. Design questions,..
                </p>
                <div className={styles['bottom-left']}>
                  <div className={styles['priority-section']}>
                    <span>Priority</span>
                    <div className={styles['priority-value']}>
                      <img
                        src={priorityIcon2}
                        alt="Priority Icon"
                        className={styles['priority-icon']}
                      />
                      <span>Without</span>
                    </div>
                  </div>
                  <div className={styles['deadline-section']}>
                    <span>Deadline</span>
                    <span>12/05/2023</span>
                  </div>
                </div>
                <div className={styles['right-icons']}>
                  <img src={icon1} alt="Icon 1" className={styles['icon']} />
                  <img src={icon2} alt="Icon 2" className={styles['icon']} />
                  <img src={icon3} alt="Icon 3" className={styles['icon']} />
                </div>
              </div>
            <button className={styles['add-card']}>
              <span className={styles['add-button']}>+</span>
              Add another card
            </button>
            </div>
        </div>

        <div className={styles['column']}>
              {isAddCardModalOpen && <ModalAddCard onClose={() => setIsAddCardModalOpen(false)} />}
          <div className={styles.card1}>
            Done
            <div className={styles['card-icons']}>
              <img
                src={firstImage}
                alt="First"
                className={styles['icon-image']}
              />
              <img
                src={secondImage}
                alt="Second"
                className={styles['icon-image']}
              />
            </div>
          </div>
          <div className={styles['card-column']}>
            <div className={styles['task-card']}>
              <img
                src={leftBarImage}
                alt="Colored bar"
                className={styles['left-bar']}
              />
              <h2 className={styles['card-title']}>Reporting and Analytics</h2>
              <p className={styles['card-description']}>
                Utilize TaskPro's reporting and analytics <br /> capabilities to
                gain insights into project progress,..
              </p>
              <div className={styles['bottom-left']}>
                <div className={styles['priority-section']}>
                  <span>Priority</span>
                  <div className={styles['priority-value']}>
                    <img
                      src={priorityIcon}
                      alt="Priority Icon"
                      className={styles['priority-icon']}
                    />
                    <span>Low</span>
                  </div>
                </div>
                <div className={styles['deadline-section']}>
                  <span>Deadline</span>
                  <span>12/05/2023</span>
                </div>
              </div>
              <div className={styles['right-icons']}>
                <img src={icon1} alt="Icon 1" className={styles['icon']} />
                <img src={icon2} alt="Icon 2" className={styles['icon']} />
                <img src={icon3} alt="Icon 3" className={styles['icon']} />
              </div>
            </div>

            <div className={styles['task-card']}>
              <img
                src={leftBarImage3}
                alt="Colored bar"
                className={styles['left-bar']}
              />
              <h2 className={styles['card-title']}>
                Publication of the project
              </h2>
              <p className={styles['card-description']}>
                Review the project materials: Familiarize yourself <br /> with
                the project's content, including text, images,..
              </p>
              <div className={styles['bottom-left']}>
                <div className={styles['priority-section']}>
                  <span>Priority</span>
                  <div className={styles['priority-value']}>
                    <img
                      src={priorityIcon3}
                      alt="Priority Icon"
                      className={styles['priority-icon']}
                    />
                    <span>High</span>
                  </div>
                </div>
                <div className={styles['deadline-section']}>
                  <span>Deadline</span>
                  <span>12/05/2023</span>
                </div>
              </div>
              <div className={styles['right-icons']}>
                <img src={icon1} alt="Icon 1" className={styles['icon']} />
                <img src={icon2} alt="Icon 2" className={styles['icon']} />
                <img src={icon3} alt="Icon 3" className={styles['icon']} />
              </div>
            </div>
            <div className={styles['task-card']}>
              <img
                src={leftBarImage1}
                alt="Colored bar"
                className={styles['left-bar']}
              />
              <h2 className={styles['card-title']}>Students' projects</h2>
              <p className={styles['card-description']}>
                Review the project materials: Familiarize yourself <br /> with
                the project's content, including text, images,..
              </p>
              <div className={styles['bottom-left']}>
                <div className={styles['priority-section']}>
                  <span>Priority</span>
                  <div className={styles['priority-value']}>
                    <img
                      src={priorityIcon1}
                      alt="Priority Icon"
                      className={styles['priority-icon']}
                    />
                    <span>Low</span>
                  </div>
                </div>
                <div className={styles['deadline-section']}>
                  <span>Deadline</span>
                  <span>12/05/2023</span>
                </div>
              </div>
              <div className={styles['right-icons']}>
                <img src={icon1} alt="Icon 1" className={styles['icon']} />
                <img src={icon2} alt="Icon 2" className={styles['icon']} />
                <img src={icon3} alt="Icon 3" className={styles['icon']} />
              </div>
            </div>
            <button className={styles['add-card']}>
              <span className={styles['add-button']}>+</span>
              Add another card
            </button>
        </div>
          </div>
              <button className={styles.AddColumBtn} onClick={() => setIsAddColumnModalOpen(true)}>
              <span>+</span>
              Add another column
            </button>
          {isAddColumnModalOpen && <ModalAddColumn onClose={() => setIsAddColumnModalOpen(false)} />}   
        </div>
      </section>
    </>
  );
};

export default ProjectOffice;
