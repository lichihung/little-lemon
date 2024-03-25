import {useState, React, useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";

function BookingForm(props){
    const [isDateTouched, setIsDateTouched] = useState(false);
    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");
    // const [guests, setGuests] = useState(1);
    // const [occasion, setOccasion] = useState("");
    // const handleDateChange = (e) => {
    //     const newDate = e.target.value;
    //     setDate(newDate);
    //     props.updateTimes(newDate);
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = {date, time, guests, occasion};
    //     props.onSubmit(formData); // Pass formData to submitForm function
    // }
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        // Update formik's state
        formik.setFieldValue('resdate', newDate, true);
        // Call props.updateTimes with the new date
        props.updateTimes(newDate);
    };
    const handleBlur = (e) => {
        setIsDateTouched(true);
      };

    const formik = useFormik({
        initialValues: {
          resdate: "",
          restime: "14:00",
          guests: 1,
          occasion: "Birthday",
          username: "",
          usercontact: "",
          userPhoneNumber:"",
          userEmail:""
        },
        onSubmit: (formData) => {
          console.log(formData);
          props.onSubmit(formData);
        },
        validationSchema: Yup.object().shape({
          resdate: Yup.string().required("Required"),
          restime: Yup.string().required("Required"),
          guests: Yup.number().integer().required("Required"),
          occasion: Yup.string().oneOf(['Birthday','Anniversary','Engagement','Other']),
          username: Yup.string().required("Required").max(25,"Must be fewer than 25 characters"),
          usercontact: Yup.string().required("Please select one. This is for contact purpose only."),
        }),
      });

      useEffect(() => {
        // Assuming you want to set the first available time as the default when times update
        if (props.availableTimes && props.availableTimes.length > 0) {
            formik.setFieldValue('restime', props.availableTimes[0], true);
        }
        }, [props.availableTimes, formik]);
      useEffect(() => {
        if (isDateTouched && !formik.values.resdate) {
          formik.setFieldError("resdate", "Required");
        }
      }, [formik.values.resdate, isDateTouched, formik]);

    return(
        <>
            <FullScreenSection
            isDarkBackground
            backgroundColor="#495557"
            py={16}>
                <VStack w="1024px" p={48} alignItems="center">
                <header className="yellow title" id="booking-section">
                    Reserve a table
                </header>
                <Box p={16} w="100%">
                    <form className="bookingform" onSubmit={formik.handleSubmit}>
                        <FormControl  className="formfield" isInvalid={!formik.values.resdate && (isDateTouched || formik.touched.resdate)} >
                            <FormLabel htmlFor="resdate" className="card-title">Choose date</FormLabel>
                            <Input
                            type="date"
                            id="resdate"
                            // value={date}
                            name="resdate"
                            value={formik.values.resdate}
                            onChange={handleDateChange}
                            onBlur={handleBlur}
                            className="highlight black"
                            />
                            <FormErrorMessage className="pink highlight">{formik.errors.resdate}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.restime && formik.touched.restime} className="formfield">
                            <FormLabel htmlFor="restime" className="card-title">Choose time</FormLabel>
                            <select
                            id="restime"
                            className="highlight black"
                            // value={time}
                            // onChange={(e) => setTime(e.target.value)}
                            {...formik.getFieldProps('restime')}
                            >
                            {/* If running the test, this should be skipped. */}
                            {props.availableTimes.map((timeoption, index) => (
                                <option key={index} value={timeoption}>{timeoption}</option>
                            ))}
                            </select>
                            <FormErrorMessage className="pink highlight">{formik.errors.restime}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests} className="formfield">
                            <FormLabel htmlFor="guests" className="card-title">Number of guests</FormLabel>
                            <Input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            // value={guests}
                            // onChange={(e) => setGuests(e.target.value)}
                            className="highlight black"
                            {...formik.getFieldProps('guests')}
                            />
                            <FormErrorMessage className="pink highlight">{formik.errors.guests}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion} className="formfield">
                            <FormLabel htmlFor="occasion" className="card-title">Occasion</FormLabel>
                            <select
                            id="occasion"
                            // value={occasion}
                            // onChange={(e) => setOccasion(e.target.value)}
                            className="highlight black"
                            {...formik.getFieldProps('occasion')}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>Other</option>
                            </select>
                            <FormErrorMessage className="pink highlight">{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.username && formik.touched.username} className="formfield">
                            <FormLabel htmlFor="username" className="card-title">Your name</FormLabel>
                            <Input
                            id="username"
                            placeholder="Please type your name"
                            className="highlight black"
                            {...formik.getFieldProps('username')}
                            />
                            <FormErrorMessage className="pink highlight">{formik.errors.username}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.usercontact && formik.touched.usercontact} className="formfield">
                            <FormLabel htmlFor="usercontact" className="card-title">Contact info (select one)</FormLabel>
                                <fieldset id="usercontact" className="highlight" {...formik.getFieldProps('usercontact')}>
                                    <div>
                                        <Input
                                        type="radio"
                                        id="radioOption1"
                                        name="usercontact"
                                        onChange={(e) => {formik.setFieldValue('usercontact', e.target.value, true)}}
                                        value="Phone number"/>Phone number
                                    </div>
                                        {formik.values.usercontact === "Phone number" ?
                                        <div>
                                            <InputGroup>
                                                <InputLeftAddon>+1</InputLeftAddon>
                                                <Input
                                                    type="tel"
                                                    id="userPhoneNumber"
                                                    placeholder="xxx-xxxxxxx"
                                                    className="highlight black"
                                                    {...formik.getFieldProps('userPhoneNumber')}
                                                    />
                                            </InputGroup>
                                            <FormLabel htmlFor="userPhoneNumber" className="highlight pink contact-error-message">Required. This is for contact purpose only.</FormLabel>
                                        </div>
                                        : null}
                                    <div>
                                        <Input
                                        type="radio"
                                        id="radioOption2"
                                        name="usercontact"
                                        onChange={(e) => {formik.setFieldValue('usercontact', e.target.value, true)}}
                                        value="Email"/>Email
                                    </div>
                                        {formik.values.usercontact === "Email" ?
                                        <div>
                                            <Input
                                            id="userEmail"
                                            placeholder="liz@example.com"
                                            className="highlight black"
                                            {...formik.getFieldProps('userEmail')}
                                            />
                                            <FormLabel htmlFor="userEmail" className="highlight pink contact-error-message">Required. This is for contact purpose only.</FormLabel>
                                        </div>
                                        : null}
                                </fieldset>
                            <FormErrorMessage className="pink highlight">{formik.errors.usercontact}</FormErrorMessage>
                        </FormControl>
                            <Button type="submit" className={"btn card-title black booking-btn"} aria-label="Submit booking">
                                Reserve now
                            </Button>
                    </form>
                </Box>
                </VStack>
            </FullScreenSection>
        </>
    )
};

export default BookingForm;