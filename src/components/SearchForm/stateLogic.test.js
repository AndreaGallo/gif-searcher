import { renderHook, act } from '@testing-library/react-hooks'
import useForm from 'components/SearchForm/stateLogic'

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())

    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
    const { result } = renderHook(() => useForm({
        initialKeyword: 'matrix'
    }))

    expect(result.current.keyword).toBe('matrix')
})

test('should update twice', () => {
    const { result } = renderHook(() => useForm())

    
    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })


    expect(result.current.times).toBe(2)
})