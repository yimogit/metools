<template>
    <table class="ym-table table-hover">
        <slot name="thead"></slot>
        <slot name="tbody"></slot>
    </table>
</template>

<style>
    .ym-table {
        width: 100%;
        margin: 10px 0;
    }
    
    .ym-table thead {
        background-color: #f2f2f2;
    }
    
    .ym-table th,
    .ym-table td {
        text-align: left;
        padding: 10px 15px;
        min-height: 20px;
        line-height: 20px;
        border: 1px solid #ddd;
        font-size: 14px;
        font-weight: 400;
    }
    
    .ym-table th {
        border: 1px solid #e7e7e7;
        background-color: #F5F5F6;
        font-size: 15px;
        line-height: 20px;
        font-weight: bold;
        color: #676a6c
    }
    
    .ym-table tbody tr:nth-child(2n) {
        background-color: #f7f7f7;
    }
    
    .ym-table tbody tr:hover {
        background-color: #f7f7f7;
    }
</style>