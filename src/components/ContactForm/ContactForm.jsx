import React, { Component } from 'react';

import FormField from '../../shared/components/FormField'

import {fields} from "./fields";

import styles from './ContactForm.module.css'

import {initialState} from "./initialState"

class ContactForm extends  Component {
    state ={...initialState}

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }
        
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({...initialState})
    }

    render(){
        const {name, number} = this.state;
        const {handleChange, handleSubmit} =this;
        
        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <FormField {...fields.username} value={name} onChange={handleChange} />
                <FormField {...fields.phone} value={number} onChange={handleChange} />
                <button className={styles.btn} type="submit">Add contact</button>
          </form>
        )
    }
};

export default ContactForm;

