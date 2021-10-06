// React
import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Hook Form
import { useForm, Controller } from 'react-hook-form';

// Schema
import { tagDialogFormSchema } from './TagDialogForm-schema';

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
import { createTag } from '../../../store/actions';

// Styles
import { useStyles } from './TagDialogForm-styles';

const TagDialogForm = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageId = useSelector((state) => state.dialog.tag.pageId);
  const { formRef, onClose } = props;
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: tagDialogFormSchema,
  });

  const safety = [
    { type: 'benign', label: 'Benign' },
    { type: 'malicious', label: 'Malicious' },
  ];

  const categories = [
    { type: 'crypto-services', label: 'Cryptocurrency service' },
    { type: 'index', label: 'Index, link list, or similar' },
    { type: 'marketplace', label: 'Marketplace' },
    { type: 'pornography', label: 'Pornography' },
    { type: 'forum', label: 'Forum' },
    { type: 'other', label: 'Other' },
  ];

  // Handlers
  const tagHandler = (tag) => {
    const tagData = { ...tag, page: pageId };
    dispatch(createTag(tagData));
    onClose();
  };

  //JSX
  const getSelection = (data) => {
    return (
      <Select>
        {data.map((item, index) => {
          return (
            <MenuItem key={index} value={item.type}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    );
  };

  const view = (
    <form
      className={classes.root}
      ref={formRef}
      onSubmit={handleSubmit(tagHandler)}
    >
      <FormControl className={classes.select} error={!!errors.safety}>
        <InputLabel>Safety</InputLabel>
        <Controller
          as={getSelection(safety)}
          name="safety"
          control={control}
          defaultValue=""
        />
        <FormHelperText>
          {errors.safety && errors.safety.message}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.select} error={!!errors.category}>
        <InputLabel>Category</InputLabel>
        <Controller
          as={getSelection(categories)}
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

export default TagDialogForm;
