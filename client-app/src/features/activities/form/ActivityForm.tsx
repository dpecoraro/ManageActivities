import React, { FormEvent, useState } from "react";
import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import {v4 as uuid} from 'uuid';
import { IActivity } from "../../../app/models/activity";


interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
  submitting
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };

      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleInputChange}
          placeholder="Title"
          name="title"
          value={activity.title}
        />
        <FormTextArea
          onChange={handleInputChange}
          placeholder="Description"
          name="description"
          value={activity.description}
        />
        <FormInput
          onChange={handleInputChange}
          placeholder="Category"
          name="category"
          value={activity.category}
        />
        <FormInput
          onChange={handleInputChange}
          type="datetime-local"
          name="date"
          placeholder="Date"
          value={activity.date}
        />
        <FormInput
          onChange={handleInputChange}
          placeholder="City"
          name="city"
          value={activity.city}
        />
        <FormInput
          onChange={handleInputChange}
          placeholder="Venue"
          name="venue"
          value={activity.venue}
        />
        <Button
          onChange={handleInputChange}
          floated="right"
          positive
          type="submit"
          content="Submit"
          loading={submitting}
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
