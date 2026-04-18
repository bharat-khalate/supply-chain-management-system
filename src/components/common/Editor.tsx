// components/custom-editor.js
'use client' // Required only in App Router.

import React from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

const CustomEditor = () => {
    const cloud = useCKEditorCloud( {
        version: '48.0.0'
    } );

    if ( cloud.status === 'error' ) {
        return <div>Error!</div>;
    }

    if ( cloud.status === 'loading' ) {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic
    } = cloud.CKEditor;


    return (
        <CKEditor
            editor={ ClassicEditor }
            data={ '<p>Hello world!</p>' }
            config={ {
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE4MDgwOTI3OTksImp0aSI6ImM2Mzc1ZWNjLTZhYWItNDU5Ni05Zjg1LTdhMjM2NTgzNWFkNSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIl0sInJlbW92ZUZlYXR1cmVzIjpbIlBCIiwiUkYiLCJTQ0giLCJUQ1AiLCJUTCIsIlRDUiIsIklSIiwiU1VBIiwiQjY0QSIsIkxQIiwiSEUiLCJSRUQiLCJQRk8iLCJXQyIsIkZBUiIsIkJLTSIsIkZQSCIsIk1SRSJdLCJ2YyI6ImFiNmYzNWNiIn0.jOzU1CIikjKrebs7nY_t6Oc3qqvNqnSnWDUHgDxJBwYQ4tj5QVjY0z_eZdHtcr761GqCGiT16emq5yW2NXxl3g',
                plugins: [ Essentials, Paragraph, Bold, Italic ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ]
            } }
        />
    );
};

export default CustomEditor;
