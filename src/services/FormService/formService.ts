import { Dispatch, SetStateAction, ChangeEvent } from 'react'

export interface IFieldsConfig {
  initialValue: string
  validators: any[]
}

export interface IFieldController {
  getValue: () => any
  getError: () => string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
}

export interface IFormControllerConfig {
  fields: { [index: string]: IFieldsConfig }
}

export interface IFormController {
  getInitialValue: any
  controllers: any
  updateMethods: any
  isValid: any
  validateForm: any
}

const createFormController = (
  config: IFormControllerConfig
): IFormController => {
  let _values: { [index: string]: any }
  let _setValue: Dispatch<SetStateAction<{ [index: string]: any }>>
  let _errors: { [index: string]: any }
  let _setErrors: Dispatch<SetStateAction<{ [index: string]: any } | null>>
  let _controllers: { [index: string]: IFieldController }
  let _valid: boolean = true

  const { fields } = config

  const initialValue = Object.entries(fields).reduce(
    (
      values: { [index: string]: any },
      [key, value]: [string, IFieldsConfig]
    ) => {
      values[key] = value.initialValue
      return values
    },
    {}
  )

  const updateMethods = (methods: any) => {
    _values = methods.values
    _setValue = methods.setValue
    _errors = methods.errors
    _setErrors = methods.setErrors
  }

  const _getErrorObject = (key: string): { [index: string]: any } => {
    const error = validate(_values[key], fields[key].validators)
    let newErrors = null
    if (!error && _errors && _errors[key]) {
      newErrors = _removeErrorFromErrorObject(_errors, key)
    }
    if (error) {
      newErrors = _addErrorToErrorObject(_errors, error, key)
    }
    return newErrors
  }

  const validateForm = (): boolean => {
    let newErrors: { [index: string]: any } | null = null
    Object.keys(fields).forEach(field => {
      const error = _getErrorObject(field)
      if (!error) {
        return
      }
      if (!newErrors) {
        newErrors = {}
      }
      if (error) {
        newErrors = { ...newErrors, ...error }
      }
    })
    _valid = !Boolean(newErrors)
    _setErrors(newErrors)
    return _valid
  }

  const _validateField = (key: string) => {
    const newErrors = _getErrorObject(key)
    _valid = !Boolean(newErrors)
    return _setErrors(newErrors)
  }

  _controllers = Object.keys(fields).reduce(
    (aggC: { [index: string]: IFieldController }, currentKey: string) => {
      aggC[currentKey] = {
        getValue: () => _values[currentKey],
        getError: () => _errors && _errors[currentKey],
        onChange: event =>
          _setValue({ ..._values, [currentKey]: event.target.value }),
        onBlur: () => _validateField(currentKey),
      }
      return aggC
    },
    {}
  )

  const controllers = () => {
    return _controllers
  }

  const getInitialValue = () => {
    return initialValue
  }

  const isValid = () => {
    return _valid
  }

  return {
    getInitialValue,
    controllers,
    updateMethods,
    isValid,
    validateForm,
  }
}

const validate = (value: any, validators: any[]): string => {
  if (!validators) {
    return ''
  }
  return validators.reduce((errors, validator) => errors + validator(value), '')
}

const _removeErrorFromErrorObject = (errors: any, key: string) => {
  let newErrors: any = null
  for (const errorKey in errors) {
    if (errorKey === key) {
      continue
    }
    if (!newErrors) {
      newErrors = {}
    }
    newErrors[errorKey] = errors[errorKey]
  }
  return newErrors
}

const _addErrorToErrorObject = (
  errors: any,
  error: string,
  currentKey: string
) => {
  if (!errors) {
    return { [currentKey]: error }
  }
  return { ...errors, [currentKey]: error }
}

export default { createFormController }
