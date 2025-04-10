import { Formik } from 'formik';
import * as yup from 'yup';
import { Form } from 'formik';
import { useDispatch} from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import {
  FiltersContainer,
  Dash,
  LabelContainer,
  ModalTitle,
  Span,
  Text,
  ShowAll,
  Container,
} from './Filters.styled';
import CloseButton from '../CloseButton/CloseButton';
import { setFilterSlice } from '../../../redux/filter/filterSlice';

const Filters = ({ setFilter }) => {
  const dispatch = useDispatch();

  const onFilterChange = async (e) => {
    try {
      const selectedFilter = e.target.value;
      const filter = dispatch(setFilterSlice(selectedFilter));
      setFilter(filter);
      dispatch(closeModal());
    } catch (e) {
      console.log(e);
    }
  };
  
  const showAllCards = async () => {
    const allCards =  dispatch(setFilterSlice('all'));
    setFilter(allCards);
    dispatch(closeModal());
  };

  return (
    <>
      <FiltersContainer>
        <CloseButton />
        <ModalTitle>Filters</ModalTitle>

        <Formik
          initialValues={{
            title: '',
          }}
          validationSchema={schema}
          onSubmit={() => {}}
        >
          <Form>
              <Dash></Dash>
              <Container>
              <Text id="filtersRadioButton">Label color</Text>
              <ShowAll>
                <input
                  type="radio"
                  value="all"
                  name="filtersRadioButton"
                 onClick={() => showAllCards()}
                  style={{ display: 'none' }}
                />
                <Span value="all" />
                Show all
              </ShowAll>
            </Container>
            <LabelContainer role="group" aria-labelledby="my-radio-group">
              <label>
                <input
                  type="radio"
                  value="without"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="without" />
                Without priority
              </label>

              <label>
                <input
                  type="radio"
                  value="low"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="low" />
                Low
              </label>

              <label>
                <input
                  type="radio"
                  value="medium"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="medium" />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="high"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="high" />
                High
              </label>
            </LabelContainer>
          </Form>
        </Formik>
      </FiltersContainer>
    </>
  );
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'To Short!')
    .max(10, 'To Long!')
    .required('Required!'),
});

export default Filters;
