import { Input } from '@nextui-org/react';
import { specialties } from '../../../helpers/specialties';

export default function DataLocal ({ handleChange, inputs, errors, handleSelect }) {
  return (
    <>
            <p>Datos requeridos<span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></p>
            <Input
                underlined
                labelPlaceholder="Nombre del Local"
                color="dark"
                className='name'
                onChange={handleChange}
                value={inputs.name}
                type='text'
                name='name'
                required
            />
            {errors.name && <p className='danger'>{errors.name}</p>}
            <hr />
            <label>Ubicación: </label>
            <select
                name='location'
                className='location'
                onChange={handleSelect}
                value={inputs.location}
                required
            >
                <option value='value2' defaultValue>
                    Selecciona
                </option>
                <option value='Cordoba'>Córdoba</option>
                <option value='Buenos Aires'>Buenos Aires</option>
                <option value='Corrientes'>Corrientes</option>
            </select><span style={{ color: 'red', fontWeight: 'bolder' }}>*</span>
            <hr />
            <Input
                underlined
                labelPlaceholder="Correo Electrónico"
                color="dark"
                className='correo'
                onChange={handleChange}
                value={inputs.email}
                type='text'
                name='email'
            />
            {errors.email && <p className='danger'>{errors.email}</p>}
            <hr />
            <label>Horario: </label>
            <input
                onChange={handleChange}
                value={inputs.schedule}
                type='text'
                name='schedule'
                required
            />
            {errors.schedule && <p className='danger'>{errors.schedule}</p>}
            <hr />
            <label>Teléfono: </label>
            <input
                className='telefono'
                onChange={handleChange}
                value={inputs.phone}
                type='tel'
                name='phone'
                pattern='[0-9]{10}'
                placeholder='Escribe tu número de teléfono...'
                required
            />
            {errors.phone && <p className='danger'>{errors.phone}</p>}
            <hr />
            <label>Especialidad: </label>
            <select
                name='specialty'
                className='specialty'
                onChange={handleSelect}
                value={inputs.specialty}
                required
            >
                <option value='value2' defaultValue>
                    Selecciona
                </option>
                {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                        {specialty}
                    </option>
                ))}
                {/* <option value='Otro'>Otro</option> */}
            </select><span style={{ color: 'red', fontWeight: 'bolder' }}>*</span>
            {/* {inputs.specialty === 'Otro' && (
                <>
                    <Input
                        underlined
                        labelPlaceholder="Especialidad"
                        color="dark"
                        className='other-specialty'
                        onChange={handleChange}
                        value={inputs.otherSpecialty}
                        type='text'
                        name='otherSpecialty'
                        required
                    />
                    <br />
                </>
            )} */}
            <hr />
        </>
  );
}
