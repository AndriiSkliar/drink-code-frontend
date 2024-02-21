import styled from 'styled-components';
export const StyledFollowCursor = styled.div` 
  /* //!! Стили для кружочка следования за курсором */
  /* Начальные стили для элемента, который будет следовать за курсором */
  .follow-cursor{
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid #0d6efd;
  border-radius: 50%;
  transform: translateY(-50%) translateX(-50%); 
  position: absolute; 
  z-index: 999; 
  pointer-events: none; /* чтобы сквозь элемент можно было взаимодействовать с элементами, находящимися под ним */
  transition: width 0.64s, height 0.64s, border-radius 0.64s, background 0.64s;
  }


/* Активный класс для кружка при наведении на ссылку */
.follow-cursor_active {
  height: 64px;
  width: 64px;
  border-width: 2px;
  background: rgba(13,110,253,0.32);
}


/* Скрываем кружок для не ПК и ноутов */
@media (max-width: 991.98px) {
    .follow-cursor {
    display: none;
  }
}
  `