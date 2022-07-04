export interface Column {
  title: string
  dataIndex: string
  key: string
}

export interface Data {
  email: string
  status: string
  description: string
  date: string
  involvement: number
  talent: number
  key: string
}

export interface TableProps {
  columns: Column[]
  data: Data[]
  texts: {
    collapsed: string
    expanded: string
  }
}
