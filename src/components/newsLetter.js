import {useRef, useEffect} from "react";
import { useDispatch} from "react-redux";
import {addToNewsletter} from "../reducers/thunk";
import {Form, Button} from "react-bootstrap";

const NewsLetter = () => {
    const textInput = useRef();
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        const value = textInput.current.value;

        dispatch(addToNewsletter({email:value}))
            .unwrap()
            .then((response) => {
                if(response.newsletter === 'added'){

                }
                if(response.newsletter === 'failed'){

                }
            })
    }
    return (
        <div className='newsletter_container'>
            <h1>
                Join our newsletter
            </h1>
            <div className='form'>
                <Form onSubmit={submitHandler} className='mt-4'>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Example: yourEmail@gmail.com'
                            name='email'
                            ref={textInput}>
                        </Form.Control>
                    </Form.Group>
                    <Button className='mt-2' variant='primary' type='submit'>
                        Subscribe
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NewsLetter;