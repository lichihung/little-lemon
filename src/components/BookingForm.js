import {useState, React, useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";

function BookingForm(props){
    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [isDateTouched, setIsDateTouched] = useState(false);

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

    useEffect(() => {
    // Assuming you want to set the first available time as the default when times update
    if (props.availableTimes && props.availableTimes.length > 0) {
        formik.setFieldValue('restime', props.availableTimes[0], true);
    }
    }, [props.availableTimes]);

    const formik = useFormik({
        initialValues: {
          resdate: "",
          restime: "14:00",
          guests: "1",
          occasion: "Birthday",
        },
        onSubmit: (formData) => {
          console.log(formData);
          props.onSubmit(formData);
        },
        validationSchema: Yup.object({}).shape({
          resdate: Yup.string().required("Required"),
          restime: Yup.string().required("Required"),
          guests: Yup.number().integer().required("Required"),
          occasion: Yup.string().oneOf(['Birthday','Anniversary','Engagement','Other']),
        }),
      });

      useEffect(() => {
        if (isDateTouched && !formik.values.resdate) {
          formik.setFieldError("resdate", "Required");
        }
      }, [formik.values.resdate, isDateTouched]);

    return(
        <>
            <FullScreenSection
            isDarkBackground
            backgroundColor="#495557"
            py={16}>
                <VStack w="1024px" p={48} alignItems="center">
                <Heading className="yellow title" id="booking-section">
                    Reserve a table
                </Heading>
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
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="highlight black"
                            {...formik.getFieldProps('guests')}
                            />
                            <FormErrorMessage className="pink highlight">{formik.errors.guests}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion} className="formfield">
                            <FormLabel htmlFor="occasion" className="card-title">Occasion</FormLabel>
                            <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
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
                            <Button type="submit" className={"btn card-title black"} aria-label="Submit booking">
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