import { style } from '@vanilla-extract/css';

export const breadcrumbs = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.4rem',
});

export const crumb = style({
  selectors: {
    '&:last-child::after': {
      content: '',
    },
    '&::after': {
      content: '>',
      marginLeft: '0.4rem',
    },
  },
  // &::after {
  //   content: '>';
  //   margin-left: 0.4rem;
  // }

  // &:last-child {
  //   &::after {
  //     content: '';
  //   }
  // }
});
