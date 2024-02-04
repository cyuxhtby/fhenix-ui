import { FieldAttributes, Form, Formik } from 'formik';

import { SolidButton } from '../../components/buttons/SolidButton';
import { TextField } from '../../components/input/TextField';
import { Card } from '../../components/layout/Card';

export function MintTokenCard() {
  const initialValues = {
    token: '',
    depositAmount: '',
    mintAmount: '',
  };

  //TODO
  const onSubmit = () => {};

  return (
    <Card className="w-full sm:w-[31rem] bg-gray-800 text-white rounded-lg overflow-hidden">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form className="flex flex-col p-6">
            <div className="mb-4">
              <TokenInput
                label="TOKEN"
                name="token"
                value={values.token}
                onChange={handleChange}
                placeholder="USDC"
              />
            </div>

            <div className="flex justify-center items-center mb-4 space-x-4 align-middle">
              <TokenInput
                label="AMOUNT"
                name="depositAmount"
                value={values.depositAmount}
                onChange={handleChange}
                placeholder="0.00"
                type="number"
                step="any"
              />
              <MaxButton />
              <SolidButton type="button" color="blue" classes="ml-2 w-20 text-center text-sm mt-8">
                Deposit
              </SolidButton>
            </div>

            <div className="flex justify-between items-center">
              <TokenInput
                label="AMOUNT"
                name="mintAmount"
                value={values.mintAmount}
                onChange={handleChange}
                placeholder="0.00"
                type="number"
                step="any"
              />
              <MaxButton />
              <SolidButton type="button" color="blue" classes="ml-2 w-20 text-center text-sm mt-8">
                Mint
              </SolidButton>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

function TokenInput({ label, ...props }: { label: string } & FieldAttributes<any>) {
  return (
    <div className="flex-1">
      <label htmlFor={props.name} className="block uppercase text-sm mb-1 text-black">
        {label}
      </label>
      <TextField {...props} classes="w-full p-2 rounded bg-gray-700 border border-gray-600" />
    </div>
  );
}

function MaxButton() {
  // You should add the logic to handle the max button functionality
  return (
    <button type="button" className="mt-8 ml-2 w-20 text-center text-sm text-black">
      MAX
    </button>
  );
}
