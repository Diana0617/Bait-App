import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { MdClose } from 'react-icons/md';
import { useDishForm } from '../../../hooks/useDishForm';
import './DishForm.css';
import validateForm from './dishVal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMenu, postDish, putDish } from '../../../redux/actions/menuDish';
import Inputs from './Inputs/Inputs';
import { useParams } from 'react-router-dom';

const DishForm = ({ menuId, nomodal, setToggleModal }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dish } = useSelector(state => state);

  const initialValues = dish
    ? {
        name: dish.name,
        type: dish.type,
        price: dish.price,
        description: dish.description
      }
    : {
        name: '',
        type: '',
        price: '',
        description: ''
      };
  const { formValues, errors, handleInputChange, handleSelect, resetForm, loading, handleChangeimages, image } = useDishForm(initialValues, validateForm);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.entries(errors).length) {
      dispatch(postDish(menuId, formValues)).then(() => {
        toast.success('Producto agregado', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
        resetForm();
      }).catch(() => {
        toast.error('Error al agregar', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
      });
    } else {
      swal('Datos incompletos o con errores');
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(putDish(dish.id, formValues)).then(() => {
      toast.success('Producto actualizado con éxito.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
      resetForm();
    }).catch(() => {
      toast.error('Error al actualizar', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    });
  };

  useEffect(() => {
    dispatch(getMenu(id));
  }, [dispatch, id]);

  return (
  <>
      <ToastContainer />
      <div className='Create-dish-Form animated-element'>
        <button className='Close-dish-form-button' onClick={() => setToggleModal(nomodal)}><MdClose/></button>
        <div className='dishes_data animated-element'>
          {
            dish
              ? <h2>Actualizar producto</h2>
              : <h2>Agregar un nuevo producto</h2>
          }
          <div className='dish-form-container'>
          <Inputs
            handleChange={handleInputChange}
            handleChangeimages={handleChangeimages}
            handleSelect={handleSelect}
            formValues = {formValues}
            image={image}
            errors={errors}
            loading={loading}
          />
      {
        dish
          ? <button onClick={handleUpdate} className='btnDish' type='submit'>Actualizar</button>
          : <button onClick={handleSubmit} className='btnDish' type='submit'>Agregar</button>
      }
          </div>
      </div>
    </div>
  </>
  );
};

export default DishForm;
