import { useRef, useState } from 'react'
import FormService, {
  IFormControllerConfig,
  IFormController,
} from '../services/formService'

export interface IController {
  value: any
  onChange: any
}

const useForm = (config: IFormControllerConfig) => {
  const formController = useRef<IFormController>()
  if (!formController.current) {
    formController.current = FormService.createFormController(config)
  }

  const [values, setValue] = useState<{ [index: string]: any }>(
    formController.current.getInitialValue()
  )
  const [errors, setErrors] = useState<{ [index: string]: any } | null>(null)

  formController.current.updateMethods({ values, setValue, errors, setErrors })

  return formController.current
}

export default useForm
