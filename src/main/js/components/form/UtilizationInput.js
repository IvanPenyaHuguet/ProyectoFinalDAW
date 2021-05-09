import React, { useState, useEffect } from 'react';

import backend from '../../service/backend/UtilizationService';
import AutocompleteInput from './utils/AutocompleteInput';
import { useTranslation } from 'react-i18next';

export default function UtilizationInput (){

    const [ options, setOptions ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        let active = true;
    
        if (!loading) {
          return undefined;
        }
    
        try {
          (async () => {
            const response = await backend.getAll();
            const objects = await response.data.filter(n => n);            
            
            if (active) {
              setOptions(objects);
              setLoading(false);
            }
          })();
        }
        catch (e) {
          errorService.checkError(e);
        }
        
    
        return () => {
          active = false;
        };
    }, [loading]);

    return (<AutocompleteInput name="utilization" label={t('form.label.utilization')} options={options} loading={loading}/>)

}