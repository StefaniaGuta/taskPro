import React from 'react';
import ModalEditColumn from 'components/PopUp/ModalEditColumn/ModalEditColumn';
import ModalEditCard from 'components/PopUp/EditCard/EditCard';
import ModalAddColumn from 'components/PopUp/ModalAddColumn/ModalAddColumn';
import ModalAddCard from 'components/PopUp/AddCard/AddCard';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './ProjectOffice.module.css';
import filtersImage from '../../images/filter.png';
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

const ProjectOffice = () => {
  const [isEditColumnModalOpen, setIsEditColumnModalOpen] = useState(false);
  const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  return (
    <div
      style={{ display: 'flex', backgroundColor: '#F6F6F7', height: '100vh' }}
    >
      <SideBar />
      <div className={styles['project-office-container']} style={{ flex: 1 }}>
        <h1 className={styles['project-office-title']}>Project office</h1>

        <div className={styles['filters-section']}>
          <span className={styles['filters-text']}>Filters</span>
          <img
            src={filtersImage}
            alt="Filters"
            className={styles['filters-image']}
          />
        </div>

        {/* Top row of cards */}
        <div className={styles['top-card-row']}>
          <div className={`${styles.card1} ${styles['to-do-card']}`}>
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
          {isEditColumnModalOpen && <ModalEditColumn onClose={() => setIsEditColumnModalOpen(false)} />}
          <div className={`${styles.card1} ${styles['in-progress-card']}`}>
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

          <div className={`${styles.card1} ${styles['done-card']}`}>
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
          <button className={styles.AddColumBtn} onClick={() => setIsAddColumnModalOpen(true)}>
            <span>+</span>
            Add another column
          </button>
        </div>
        {isAddColumnModalOpen && <ModalAddColumn onClose={() => setIsAddColumnModalOpen(false)} />}


        <div className={styles['card-columns']}>
          {/* First Column */}
          <div className={styles['card-column']}>
            {/* First Card */}
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
            {isEditCardModalOpen && <ModalEditCard onClose={() => setIsEditCardModalOpen(false)} />}
            {/* Second Card */}
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

            {/* Third Card */}
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
          </div>

          {/* Second Column */}
          <div className={styles['card-column']}>
            {/* First Card */}
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

            {/* Second Card */}
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

            {/* Third Card */}
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
          </div>

          {/* Third Column */}
          <div className={styles['card-column']}>
            {/* First Card */}
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

            {/* Second Card */}
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

            {/* Third Card */}
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
          </div>
        </div>
        {/* Bottom row of cards */}
        <div className={styles['bottom-card-row']}>
          <div className={`${styles.card} ${styles['add-card']}`} onClick={() => setIsAddCardModalOpen(true)}>
            Add another card
            <button className={styles['add-button']}>+</button>
          </div>
        {isAddCardModalOpen && <ModalAddCard onClose={() => setIsAddCardModalOpen(false)} />}
          <div className={`${styles.card} ${styles['add-card']}`}>
            Add another card
            <button className={styles['add-button']}>+</button>
          </div>
          <div className={`${styles.card} ${styles['add-card']}`}>
            Add another card
            <button className={styles['add-button']}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOffice;
