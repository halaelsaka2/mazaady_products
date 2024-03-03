import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from './index';

describe('ProductForm', () => {
    test('should select the form with correct data', () => {
        render(<ProductForm catOptions={[]} />);

        const submitButton = screen.getByRole('button', { name: 'Add Product' });

        const formValues = {
            'Main Category': { label: 'Category 1', value: 'category1' },
            'Sub Category': { label: 'Subcategory 1', value: 'subcategory1' },
        };

        fireEvent.change(document.getElementById('react-select-2-input'), { target: { value: formValues['Main Category'].value } });
        fireEvent.change(document.getElementById('react-select-3-input'), { target: { value: formValues['Sub Category'].value } });
        fireEvent.click(submitButton);

    });
});