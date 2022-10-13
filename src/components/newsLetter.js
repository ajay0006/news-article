import {useRef} from "react";
import { useDispatch} from "react-redux";
import { displayToast} from "./toats";
import {addToNewsletter} from "../reducers/thunk";
import { clearArticleState} from "../reducers/postsReducer";
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
                    displayToast('SUCCESS','Thank you for subscribing' )
                    textInput.current.value = "";

                }
                if(response.newsletter === 'failed'){
                    displayToast('ERROR','You have subscribed in the past' )
                    textInput.current.value = "";

                }

                dispatch(clearArticleState())
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