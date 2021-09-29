// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Hook Form
import { useForm, Controller } from 'react-hook-form';

// Schema
import { feedbackDialogFormSchema } from './FeedbackDialogForm-schema';

// Material
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

// Store
import { createFeedback } from '../../../store/actions';

// Styles
import { useStyles } from './FeedbackDialogForm-styles';

const FeedbackDialogForm = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const { formRef, onClose } = props;
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: feedbackDialogFormSchema,
  });

  const categories = [
    { type: 'results', label: 'Results' },
    { type: 'search_box', label: 'Search Box' },
    { type: 'settings', label: 'Settings' },
    { type: 'other', label: 'Other' },
  ];

  // Handlers
  const feedbackHandler = (feedback) => {
    dispatch(createFeedback(feedback));
    onClose();
  };

  //JSX
  const select = (
    <Select>
      {categories.map((category, index) => {
        return (
          <MenuItem key={index} value={category.type}>
            {category.label}
          </MenuItem>
        );
      })}
    </Select>
  );

  const view = (
    <form
      className={classes.root}
      ref={formRef}
      onSubmit={handleSubmit(feedbackHandler)}
    >
      <FormControl className={classes.select} error={!!errors.category}>
        <InputLabel>Category</InputLabel>
        <Controller
          as={select}
          name="category"
          control={control}
          defaultValue=""
        />
        <FormHelperText>
          {errors.category && errors.category.message}
        </FormHelperText>
      </FormControl>
      <TextField
        className={classes.text}
        inputRef={register}
        label="Comments"
        name="comments"
        placeholder="Optional"
        variant="outlined"
        defaultValue=""
        maxRows={3}
        minRows={3}
        multiline
      />
    </form>
  );

  return view;
};

export default FeedbackDialogForm;
