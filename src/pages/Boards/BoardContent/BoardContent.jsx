import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, /*PointerSensor*/ useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_STYLE = {
  COLUMN:'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD:'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  //yêu cầu cursor di chuyển 10px thì kích hoạt event
  //const pointerSensor = useSensor(PointerSensor, { activationConstraint:{ distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint:{ distance: 10 } })

  //nhấn dữ 250ms và dung sai của cảm ứng để kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint:{ delay: 250, tolerance: 5 } })

  //const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  //cùng 1 thời điểm chỉ có 1 phần tử được drag(column or card)
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])
  // Trigger khi bắt đầu kéo 1 phần tử
  const handleDragStart = (event) => {
    //console.log('handleDragEnd: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_STYLE.CARD : ACTIVE_DRAG_ITEM_STYLE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }
  // Trigger khi kết thúc hành động kéo => thả
  const handleDragEnd = (event) => {
    //console.log('handleDragEnd: ', event)
    const { active, over } = event

    //kiểm tra nếu không tồn tại over
    if (!over) return

    //nếu vị trí sau kéo thả kahcs vị trí banđầu
    if (active.id !== over.id) {
      // lấy vị trí cũ {từ active}
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // lấy vị trí cũ {từ active}
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      //Dùng arrayMove của dnd-kit để sắp xếp lại mảng Columns ban đầu
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // console.log dữ liệu để xử lí gọi API
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumn: ', dndOrderedColumns)
      // console.log('dndOrderedColumnIds: ', dndOrderedColumnsIds)

      //cập nhật state column sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  //animation khi thả drop phần tử
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width:'100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>

        {/* Box Colum */}
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.COLUMN) &&<Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.CARD) &&<Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent