import React, { Component } from 'react';
import { useParams } from 'react-router';

export default function MoreDetails() {
    const {id} = useParams()
    return(
         <div>
             More Details...{id}
         </div>
    )
 }