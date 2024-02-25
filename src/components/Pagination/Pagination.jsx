import {
  PaginationContainer,
  PaginationArrow,
  PaginationButton,
  PaginationList,
} from './Pagination.styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Для використання цього компоненту потрібно передати в нього параметр pageQuan, кількість сторінок для якої потрібно рендерити пагінацію :)

const PaginationPanel = ({ pageQuan }) => {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentPpage, setCurrentPage] = useState(1);

  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pageQuan; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (numberOfPages.length < 9) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 5); // right length
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  const currentPage = searchParams.get('page') ?? '1';
  return (
    <>
      <PaginationContainer>
        <PaginationArrow
          type="button"
          className={`${currentButton === 1 ? 'disabled' : ''}`}
          onClick={() => {
            if (parseInt(currentPage) > 1) {
              navigation(`?page=${parseInt(currentPage) - 1}`);
              setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1));
            }
          }}
          disabled={parseInt(currentPage) <= 1}
        >
          &#60;
        </PaginationArrow>
        <PaginationList>
          {arrOfCurrButtons.map((item, index) => {
            return (
              <PaginationButton
                type="button"
                key={index}
                data-pagination-value={item}
                className={`${parseInt(currentPage) === item ? 'active' : ''}`}
                onClick={(event) => {
                  setCurrentButton(item);
                  if (
                    event.target.dataset.paginationValue !== ' ...' &&
                    event.target.dataset.paginationValue !== '... ' &&
                    event.target.dataset.paginationValue !== '...'
                  ) {
                    navigation(`?page=${item}`);
                  } else {
                    navigation(`?page=${currentPage}`);
                  }
                }}
              >
                {item}
              </PaginationButton>
            );
          })}
        </PaginationList>
        <PaginationArrow
          type="button"
          className={`${
            currentButton === numberOfPages.length ? 'disabled' : ''
          }`}
          onClick={() => {
            navigation(`?page=${parseInt(currentPage) + 1}`);
            setCurrentButton((prev) =>
              prev >= numberOfPages.length ? prev : prev + 1
            );
          }}
          disabled={parseInt(currentPage) >= numberOfPages.length}
        >
          &#62;
        </PaginationArrow>
      </PaginationContainer>
    </>
  );
};

export default PaginationPanel;
