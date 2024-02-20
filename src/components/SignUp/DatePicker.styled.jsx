import { styled } from '@mui/material/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CalendarSvgIcon } from './CalendarSvgIcon';

import { useFormikContext } from 'formik';

const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';
const borderTransition = 'border 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

const StyledDesktopDatePicker = styled(DesktopDatePicker)(
  ({ err, curValue }) => {
    return {
      '& .MuiInputBase-root': {
        width: '350px',  
        borderRadius: '200px',
        border: '1px solid rgba(243, 243, 243, 0.2);',
        outline: 'none',
        fontSize: '14px',
        lineHeight: '1.28',
        color: 'rgba(243, 243, 243, 0.5)',
        backgroundColor: 'transparent',
        transition: borderTransition,
        borderColor:
          err && curValue
            ? 'rgba(218, 20, 20, 0.5)'
            : curValue
            ? 'rgba(60, 188, 129, 0.5)'
            : 'rgba(243, 243, 243, 0.2)',
      },

      '& .MuiInputBase-root:hover': {
        border: '1px solid rgba(243, 243, 243, 0.5)',
      },

      '& .MuiTextField-root': {
        padding: '18px 24px',
      },

      '& .MuiOutlinedInput-root': {
        fontSize: '14px',
        lineHeight: '1.28',
        color: 'rgba(243, 243, 243, 0.5)',
        backgroundColor: 'transparent',
        paddingRight: '18px',
      },

      '& .MuiInputBase-input': {
        padding: '18px 24px',
      },

      '& .MuiIconButton-root': {
        marginRight: '0px',
      },

      '& .Mui-error': {
        transition: `border ${transition} color ${transition}`,
        border: '1px solid rgba(218, 20, 20, 0.5)',
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    };
  }
);
const PopperDateStyles = {
  '& .MuiPaper-root': {
    backgroundColor: '#161f37',
    color: 'white',
  },

  '& .MuiIconButton-root': {
  color: 'white',
},

'& .Mui-disabled.Mui-disabled.MuiIconButton-edgeStart': {
   color: 'rgba(239, 237, 232, 0.4)',
},

'& .MuiDayCalendar-weekDayLabel': {
  color: 'rgba(243, 243, 243, 0.5)',
},

'& .MuiPickersDay-dayOutsideMonth': {
  color: 'white',
},

'& .MuiPickersDay-root.Mui-disabled.Mui-disabled': {
  color: 'rgba(243, 243, 243, 0.2)',
},

'& .MuiPickersDay-today.Mui-selected.MuiPickersDay-root': {
  backgroundColor: 'white',
  color: 'black',
 
},

'& .MuiPickersDay-today.Mui-selected': {
border: '1px solid rgba(243, 243, 243, 0.5)',
},

'& .MuiPickersDay-root': {
  color:'white',
},

 }

export default function BirthDate() {
  const { setFieldValue, errors, values } = useFormikContext();

  return (
    <StyledDesktopDatePicker
      name="birthDate"
      value={null}
      onChange={value => {
        const updatedValue = value ? value.format('DD MMM YYYY') : '';
        setFieldValue('birthDate', updatedValue);
      }}
      disableFuture
      showDaysOutsideCurrentMonth
      slots={{
        openPickerIcon: CalendarSvgIcon,
      }}
      err={errors.birthDate}
      curValue={values.birthDate}
      slotProps={{
        textField: {
          fullWidth: true,
          placeholder: 'dd/mm/yyyy',
          error: !!errors.birthDate,
        },
        toolbar: {
          hidden: true,
        },
        popper: {
          sx: PopperDateStyles,
        }
      }}
      format="DD/MM/YYYY"
      defaultValue={'dd/mm/yyyy'}
    />
  );
}